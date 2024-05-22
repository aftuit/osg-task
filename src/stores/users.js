import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const users = ref([
    { id: 1, name: "Ish boshqaruvchi", created_at: "12:20 | 20.11.2023" },
    { id: 2, name: "Master", created_at: "12:20 | 20.11.2023" },
    { id: 3, name: "Xamirchi", created_at: "12:20 | 20.11.2023" },
    { id: 4, name: "Qadoqlovchi", created_at: "12:20 | 20.11.2023" },
    { id: 5, name: "Qo’riqchi", created_at: "12:20 | 20.11.2023" },
    { id: 6, name: "Master", created_at: "12:20 | 20.11.2023" },
    { id: 7, name: "Xamirchi", created_at: "12:20 | 20.11.2023" },
    { id: 8, name: "Xamirchi - 2", created_at: "12:20 | 20.11.2023" },
    { id: 9, name: "Qadoqlovchi", created_at: "12:20 | 20.11.2023" },
    { id: 10, name: "Qo’riqchi", created_at: "12:20 | 20.11.2023" },
    { id: 11, name: "Qadoqlovchi", created_at: "12:20 | 20.11.2023" },
    { id: 12, name: "Qo’riqchi", created_at: "12:20 | 20.11.2023" },
    { id: 13, name: "Master", created_at: "12:20 | 20.11.2023" },
    { id: 14, name: "Xamirchi", created_at: "12:20 | 20.11.2023" },
    { id: 15, name: "Xamirchi - 2", created_at: "12:20 | 20.11.2023" },
  ]);

  function addUser(user) {
    users.value.push(user);
  }
  function editUser(newValues, id) {
    users.value = users.value.map(e => {
      if (e.id === id) {
        return {
          id: newValues.id,
          title: newValues.title,
          created_at: newValues.created_at,
        };
      } else return e;
    });
  }
  function deleteUser(id) {
    users.value = users.value.filter(user => user.id !== id);
  }

  return { users, addUser, editUser, deleteUser };
});
