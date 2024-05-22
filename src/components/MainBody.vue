
<script setup>
import {
  SearchOutlined,
  DownloadOutlined,
  FilterOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ReadFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";

import { useUsersStore } from "@/stores/users";

const usersStore = useUsersStore();

const columns = [
  {
    title: "T/r",
    dataIndex: "order",
  },
  {
    title: "Nomi",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      },
      multiple: 3,
    },
  },
  {
    title: "Yaratilgan vaqti",
    dataIndex: "created_at",
    sorter: {
      compare: (a, b) => a.created_at - b.created_at,
      multiple: 2,
    },
  },
  {
    title: "",
    dataIndex: "action",
  },
];

const menu = ref([
  {
    name: "Bo’limlar/Sehlar",
    value: "departments",
  },
  {
    name: "Lavozimlar",
    value: "roles",
  },
  {
    name: "Xodimlar",
    value: "users",
  },
  {
    name: "Guruhlar",
    value: "groups",
  },
]);

const active = ref("departments");

function movePage(name) {
  active.value = name;
}

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
</script>
<template>
  <div class="main-body-content">
    <h1 class="main-body-title">Katalog</h1>
    <div class="main-body-section">
      <div class="section-nav">
        <ul class="section-nav-list">
          <li
            class="section-nav-item"
            :class="{ active: item.value === active }"
            v-for="item in menu"
            :key="item.value"
          >
            <router-link to="/" @click="movePage(item.value)">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="section-list">
        <div class="section-list-nav">
          <span>Lavozimlar</span>

          <div class="list-nav-right">
            <div class="search-bar">
              <input type="text" placeholder="Izlash" />
              <div class="search-btn">
                <SearchOutlined />
              </div>
            </div>

            <a-button class="btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_306)">
                  <path
                    d="M9.75 7.49998H13.5L9 12L4.5 7.49998H8.25V2.24998H9.75V7.49998ZM3 14.25H15V8.99998H16.5V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V8.99998H3V14.25Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_306">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a-button>
            <a-button class="btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 10.4998V14.9998L7.5 16.4998V10.4998L3 3.74979V2.24979H15V3.74979L10.5 10.4998ZM4.803 3.74979L9 10.0453L13.197 3.74979H4.803Z"
                  fill="white"
                />
              </svg>
            </a-button>
            <a-button class="btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 8.24979V3.74979H9.75V8.24979H14.25V9.74979H9.75V14.2498H8.25V9.74979H3.75V8.24979H8.25Z"
                  fill="white"
                />
              </svg>
            </a-button>
          </div>
        </div>
        <div class="table-wrapper">
          <a-table
            :columns="columns"
            :data-source="usersStore.users"
            @change="onChange"
            :pagination="{ pageSize: 5 }"
          >
            <template #bodyCell="{ index, column, record }">
              <template v-if="column.dataIndex == 'order'">
                {{ index + 1 }}</template
              >
              <template v-if="column.dataIndex == 'action'">
                <div class="actions">
                  <a-button type="text" class="action-btn">
                    <EditOutlined />
                  </a-button>
                  <a-button
                    type="text"
                    class="action-btn"
                    @click="usersStore.deleteUser(record.id)"
                  >
                    <DeleteOutlined />
                  </a-button>
                </div>
              </template>
            </template>
          </a-table>
        </div>
      </div>
      <div class="section-stats">
        <div class="stats-header">
          Statistika

          <a-button class="btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_306)">
                <path
                  d="M9.75 7.49998H13.5L9 12L4.5 7.49998H8.25V2.24998H9.75V7.49998ZM3 14.25H15V8.99998H16.5V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V8.99998H3V14.25Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_306">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a-button>
        </div>

        <div class="chart">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C116.063 1.91552e-07 131.89 3.8696 146.141 11.2813C160.392 18.693 172.648 29.4287 181.871 42.5799C191.095 55.7311 197.015 70.9106 199.129 86.834C201.244 102.757 199.492 118.956 194.021 134.059C188.55 149.161 179.522 162.724 167.699 173.599C155.877 184.473 141.609 192.34 126.103 196.533C110.597 200.726 94.3084 201.122 78.6167 197.687C62.9251 194.252 48.2918 187.088 35.9552 176.8L100 100V0Z"
              fill="#2DC933"
            />
            <path
              d="M100 0C79.3332 -2.46449e-07 59.174 6.40322 42.2952 18.329C25.4164 30.2547 12.6472 47.1171 5.74382 66.5968C-1.15955 86.0766 -1.85792 107.217 3.74476 127.11C9.34745 147.002 20.976 164.671 37.0309 177.685L100 100V0Z"
              fill="#DD1243"
            />
          </svg>
        </div>
        <div class="chart-info">
          <div class="text red">
            <div class="label">
              <span></span>
              Bo’limlar/Sehlar
            </div>
            <span class="count">8</span>
          </div>
          <div class="text green">
            <div class="label">
              <span></span>
              Lavozimlar
            </div>
            <span class="count">12</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-body-content {
  height: 100%;
  flex-direction: column;
  display: flex;
}
.main-body-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin: 0;
}
.main-body-section {
  margin-top: 24px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  height: 100%;
}

.section-nav,
.section-list,
.section-stats {
  box-shadow: var(--box-shadow);
  border-radius: var(--b-radius);
}
.section-nav {
  width: 25%;
}
.section-list {
  padding: 18px;
  width: 50%;
}
.section-stats {
  width: 25%;
  padding: 18px;
}
.section-nav-list {
  margin-top: 8px;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.section-nav-item {
  border-radius: var(--b-radius);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 0 18px;
  position: relative;
  margin: 4px 0;
  width: 100%;
}
.section-nav-item:hover a {
  box-shadow: var(--box-shadow);
}
.section-nav-item::before {
  transition: all 0.2s linear;
  content: "";
  height: 100%;
  width: 6px;
  background: var(--primary);
  position: absolute;
  left: 0;
  bottom: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  opacity: 0;
}
.section-nav-item.active::before {
  opacity: 1;
}
.section-nav-item a {
  color: #000;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 12px;
  display: inline-block;
  border-radius: 8px;
  transition: all 0.2s linear;
  width: 100%;
}

.section-list-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.section-list-nav > span {
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
}
.list-nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.btn {
  background: var(--primary);
  color: #fff;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.search-bar {
  display: flex;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--primary);
}
.search-bar input {
  background: transparent;
  outline: none;
  border: none;
  padding: 5px 12px;
  width: 80px;
  font-size: 12px;
}
.search-btn {
  background: var(--primary);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.table-wrapper {
  margin-top: 20px;
}
.stats-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
}
.chart {
  margin-top: 24px;
  text-align: center;
}
.chart-info {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.chart-info .text {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.text .label span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.text.red .label span {
  background: #dd1243;
}
.text.green .label span {
  background: #2dc933;
}

.actions {
  display: flex;
  justify-content: end;
}
.action-btn {
  width: 20px;
  height: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>