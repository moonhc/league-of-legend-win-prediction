import numpy as np 
import tensorflow as tf 
from model_mean import Model
from params import*
import argparse

def make_prediction(sess, model, data):
    input_var = tf.placeholder(dtype=tf.int64, shape=(None, None))
    target_var = tf.placeholder(dtype=tf.float32, shape=(None, None))
    prob = tf.placeholder_with_default(1.0, shape=())
    decay_lr = tf.placeholder_with_default(LEARNING_RATE, shape=())
    is_training = tf.placeholder_with_default(False, shape=())

    model.construct_model(input_var, target_var, prob, decay_lr, is_training)
    saver = tf.train.Saver()
    init = tf.global_variables_initializer()
    sess.run(init)

    saver.restore(sess, './tmp/trained_variables_mean.ckpt')
  
    change_array = np.load("./tmp/kor_eng.npy")
    converted_data = change_array[np.array(data)]
    converted_data = np.array(list(converted_data[:5])+list(converted_data[5:]+143))
    
    prediction = sess.run(model.output, feed_dict={input_var: np.array([converted_data]), target_var: np.ones((1,2))})

    return prediction[0][1], prediction[0][0]

def parse_args():
    desc = "Predict Team Score"
    parser = argparse.ArgumentParser(description=desc)

    parser.add_argument('--champions', '--arg', type=int, nargs='+',
                        help='Combination of champions, our team: 1~143, opponent team: 143~286')

    return check_args(parser.parse_args())

def check_args(args):
    try:
        assert len(args.champions) <= 10 and len(args.champions) > 0 and type(args.champions[0]) is int
    except:
        print('Length is not valid or type is not int.')
        return None

    return args

def main(args):
    config = tf.ConfigProto()
    config.gpu_options.allow_growth = True

    model = Model(input_dim=INPUT_DIM, dim_hidden=DIM_HIDDEN, scope='model')

    sess = tf.Session(config=config)

    data = np.array(args.champions)
    blue, red = make_prediction(sess, model, data)
    print(blue, red)

if __name__ == '__main__':
    
    # parse arguments
    args = parse_args()
    if args is None:
        exit()

    # main
    main(args)
