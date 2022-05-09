import { defineStore } from 'pinia';
import request from '../utils/request';

export const useStore = defineStore('main', {
  state: () => {
    return {
      employees: [],
      limit: 10,
      page: 1,
      selectedEmployee: {},
      employeeCheckin: {},
    };
  },
  mutations: {},
  actions: {
    async getEmployee(page = this.page, limit = this.limit) {
      try {
        const response = await request.get('/employee', {
          params: { page, limit },
        });
        // if (response) this.employees = [...this.employees, ...response.data];
        if (response) this.employees = response.data;
      } catch (error) {
        console.log(error, 'error');
      }
    },
    getNextPage() {
      this.page += 1;
      this.getEmployee(this.page, this.limit);
    },
    getPrevPage() {
      this.page -= 1;
      if (this.page > 0) {
        this.getEmployee(this.page, this.limit);
      }
    },
    async selectEmployee(employeeId) {
      const response = await request.get(`/employee/${employeeId}`);
      if (response) {
        this.selectedEmployee = response.data;
      }
    },
    async getEmployeeCheckingData(employeeId) {
      const response = await request.get(`/employee/${employeeId}/checkin`);
      if (response) {
        this.employeeCheckin = response.data;
      }
    },
  },
  getters: {},
});
