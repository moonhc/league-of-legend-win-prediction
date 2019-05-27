import numpy as np 
import tensorflow as tf 
from tensorflow.contrib.layers.python import layers as tf_layers
from params import*

def fc_block(inp, cweight, bweight, prob, reuse, scope, activation=tf.nn.relu, is_training=True):
    normed = tf.matmul(inp, cweight) + bweight
    normed = normalize(normed, activation, reuse, scope, is_training)
    normed = tf.nn.dropout(normed, prob)
    return normed

def normalize(inp, activation, reuse, scope, is_training=True):
    return tf_layers.batch_norm(inp, activation_fn=activation, reuse=reuse, is_training=is_training, scope=scope)
