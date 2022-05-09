
<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
   text-gray-500 max-w-6xl mx-auto h-5/6">

    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Country
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>

            <TableRow
              v-for="employee in employees"
              :key="employee.id"
              :avatar="employee.avatar"
              :email="employee.email"
              :country="employee.country"
              :phone="employee.phone"
              :name="employee.name"
              :id="employee.id"
            />
          </tbody>
        </table>
        <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">

          <div class="inline-flex mt-2 xs:mt-0">
            <button
              class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
              @click="prevPage()"
            >
              Prev
            </button>
            &nbsp; &nbsp;
            <button
              class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
              @click="nextPage()"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script >
import { useStore } from "../store/store";
import { defineComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import TableRow from "./dashboard/TableRow.vue";
export default defineComponent({
  components: {
    TableRow,
  },
  setup() {
    const store = useStore();
    const { employees } = storeToRefs(store);
    onMounted(() => {
      // on application mounted get employees data
      store.getEmployee();
    });

    return {
      employees,
      nextPage: store.getNextPage,
      prevPage: store.getPrevPage,
    };
  },
});
</script>
