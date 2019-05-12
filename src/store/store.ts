import Vue from 'vue';
import Vuex from 'vuex';
import axios, { AxiosResponse } from 'axios';

import { Task } from '@/models/Task';
import { TaskStatus } from '@/models/TaskStatus';
import { TaskFilterStatus } from '@/models/TaskFilterStatus';

Vue.use(Vuex);

const MAX_STEPS_IN_HISTORY = 5;

export default new Vuex.Store({
  state: {
    tasks: Array<Task>(),
    history: Array<Array<Task>>(),
    currentHistoryIndex: 0,
    filterStatus: TaskFilterStatus.ALL,
  },
  mutations: {
    setTask(state, taskModel: Task) {
      let task = state.tasks.find((task: Task) => task.id === taskModel.id);
      if (task) {
        task = taskModel;
        if (state.currentHistoryIndex < state.history.length - 1) {
          state.history.splice(state.currentHistoryIndex, state.history.length - 1);
        }
        state.history.push(JSON.parse(JSON.stringify(state.tasks))); // reference to new object

        if (state.history.length > MAX_STEPS_IN_HISTORY) {
          state.history.shift();
        }

        state.currentHistoryIndex = state.history.length - 1;
      }
    },

    setStatus(state, taskFilterStatus: TaskFilterStatus) {
      state.filterStatus = taskFilterStatus;
    },

    loadTasks(state, payload) {
      state.tasks = payload;
      state.history.push(JSON.parse(JSON.stringify(payload)));
      state.currentHistoryIndex = 0;
    },

    goToIndexInHistory(state, possition: number) {
      state.tasks = state.history[possition];
      state.currentHistoryIndex = possition;
    },

  },
  actions: {
    setTask(context, taskModel: Task) {
      context.commit('setTask', taskModel);
    },

    goToIndexInHistory(context, index: number) {
      context.commit('goToIndexInHistory', index);
    },

    setStatus(context, status: TaskFilterStatus) {
      context.commit('setStatus', status);
    },

    getTasks(context) {
      axios.get('http://my-json-server.typicode.com/martinbrodziansky/o8-interview/todos')
        .then((response: AxiosResponse<any[]>) => {
          context.commit('loadTasks', response.data.map(a => {
            const tmpResult: Task = {
              id: a.id,
              label: a.message,
              status: a.complete ? TaskStatus.COMPLETE : TaskStatus.INCOMPLETE,
            };

            return tmpResult;
          }));
        });
    },
  },
});
