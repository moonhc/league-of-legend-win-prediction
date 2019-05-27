import numpy as np 
import tensorflow as tf 
from utils import fc_block
from params import*

class Model():
    def __init__(self, input_dim=INPUT_DIM, output_dim=OUTPUT_DIM, dim_hidden=DIM_HIDDEN, latent_dim=LATENT_DIM, update_lr=LEARNING_RATE, scope='model'):
        self.input_dim = input_dim
        self.output_dim = 2
        self.dim_hidden = dim_hidden
        self.latent_dim =  latent_dim
        self.update_lr = update_lr
        self.scope = scope
        self.flag = 0

    def construct_weights(self, scope=''):
        weights = {}

        weights['w1'] = tf.Variable(tf.random_normal([self.input_dim, 128], stddev=0.1), name=scope+'w1')
        weights['b1'] = tf.Variable(tf.zeros([128]), name=scope+'b1')
        weights['w2'] = tf.Variable(tf.random_normal([128, self.dim_hidden], stddev=0.1), name=scope+'w2')
        weights['b2'] = tf.Variable(tf.zeros([self.dim_hidden]), name=scope+'b2')
        weights['w5'] = tf.Variable(tf.random_normal([self.dim_hidden, self.dim_hidden], stddev=0.1), name=scope+'w5')
        weights['b5'] = tf.Variable(tf.zeros([self.dim_hidden]), name=scope+'b5')
        weights['w3'] = tf.Variable(tf.random_normal([self.dim_hidden, 64], stddev=0.1), name=scope+'w3')
        weights['b3'] = tf.Variable(tf.zeros([64]), name=scope+'b3')
        weights['w4'] = tf.Variable(tf.random_normal([64,self.output_dim], stddev=0.1), name=scope+'w4')

        return weights

    def forward(self, inp, weights, prob, reuse=False, scope='', is_training=True):
        hidden = fc_block(inp, weights['w1'], weights['b1'], prob, reuse, scope+'0', is_training=is_training)
        hidden = fc_block(hidden, weights['w2'], weights['b2'], prob, reuse, scope+'1', is_training=is_training)
        hidden = fc_block(hidden, weights['w5'], weights['b5'], prob, reuse, scope+'3', is_training=is_training)
        hidden = fc_block(hidden, weights['w3'], weights['b3'], prob, reuse, scope+'2', is_training=is_training)
        return tf.matmul(hidden, weights['w4'])

    def construct_model(self, input_var, target_var, prob, decay_lr, is_training):
        batch_size = tf.shape(input_var)[0]
        input_var = tf.one_hot(input_var, self.input_dim, axis=-1)
        input_var = tf.reduce_sum(input_var, axis=1)
        self.input_var = input_var

        with tf.variable_scope(self.scope, reuse=None) as training_scope:
            if 'weights' in dir(self):
                training_scope.reuse_variables()
                weights = self.weights
            else:
                self.weights = weights = self.construct_weights()

            if not 'check' in dir(self):
                self.check=1
                self.forward(input_var, weights, prob, False)
            
            output = self.forward(input_var, weights, prob, True, is_training=is_training)
            self.output = tf.nn.softmax(output, axis=1)
            _, regularizer1 = tf.nn.moments(tf.expand_dims(output[:,1], axis=1), axes=0)
            self.loss = tf.reduce_mean(tf.losses.mean_squared_error(predictions=output, labels=target_var))
            if self.flag == 0:
                self.op = tf.train.AdamOptimizer(decay_lr).minimize(self.loss + 0.5 - 0.5*tf.log(regularizer1+1e-1), var_list=weights)
            else:
                self.op = tf.train.AdamOptimizer(decay_lr).minimize(self.loss + 0.5 - 0.5*tf.log(regularizer1+1e-1), var_list=weights['w4','w3','b3'])