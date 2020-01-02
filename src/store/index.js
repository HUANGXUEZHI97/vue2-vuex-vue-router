import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import  actions from './actions'

Vue.use(Vuex)

//定义全局状态变量
const state = {
  level:'第一周',//活动周数
  itemNum:1,
  itemDetail:[
    {
      "topic_name":"题目一",
      "topic_answer": [{
        "topic_answer_id": 1,
        "topic_id": 20,
        "answer_name": "小明是你爸爸",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 2,
        "topic_id": 20,
        "answer_name": "你的爸爸是小明",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 3,
        "topic_id": 20,
        "answer_name": "你叫小明爸爸",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 4,
        "topic_id": 20,
        "answer_name": "你的爸爸是我get",
        "is_standard_answer": 1
      }]
    },
    {
      "topic_name":"题目二",
      "topic_answer": [{
        "topic_answer_id": 5,
        "topic_id": 21,
        "answer_name": "恭喜发财get",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 6,
        "topic_id": 21,
        "answer_name": "欢度春节",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 7,
        "topic_id": 21,
        "answer_name": "心想事成",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 8,
        "topic_id": 21,
        "answer_name": "锦绣中华",
        "is_standard_answer": 0
      }]
    },
    {
      "topic_name":"题目三",
      "topic_answer": [{
        "topic_answer_id": 9,
        "topic_id": 21,
        "answer_name": "正确get",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 10,
        "topic_id": 21,
        "answer_name": "错误1",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 11,
        "topic_id": 21,
        "answer_name": "错误2",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 12,
        "topic_id": 21,
        "answer_name": "错误3",
        "is_standard_answer": 0
      }]
    },
    {
      "topic_name":"题目四",
      "topic_answer": [{
        "topic_answer_id": 13,
        "topic_id": 21,
        "answer_name": "正确答案get",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 14,
        "topic_id": 21,
        "answer_name": "A是错的",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 15,
        "topic_id": 21,
        "answer_name": "D是对的",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 16,
        "topic_id": 21,
        "answer_name": "C说的不对",
        "is_standard_answer": 0
      }]
    },
    {
      "topic_name":"题目五",
      "topic_answer": [{
        "topic_answer_id": 17,
        "topic_id": 21,
        "answer_name": "错误答案",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 18,
        "topic_id": 21,
        "answer_name": "正确答案get",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 19,
        "topic_id": 21,
        "answer_name": "错误答案",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 20,
        "topic_id": 21,
        "answer_name": "错误答案",
        "is_standard_answer": 0
      }]
    }
  ],
  answerid:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})