
<script setup>
import { ref, h } from "vue";
import {
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  HomeOutlined,
  LogoutOutlined,
  FileAddOutlined,
  UsergroupDeleteOutlined,
  ProfileOutlined,
  UserOutlined,
  FolderOpenOutlined,
  BranchesOutlined,
  UserSwitchOutlined,
  CodepenOutlined 
} from "@ant-design/icons-vue";

const items = ref([
  {
    key: 1,
    icon: HomeOutlined,
    label: "Bosh sahifa",
    title: "Option 1",
  },
  {
    key: 2,
    icon: ProfileOutlined,
    label: "Vakansiya",
    title: "Option 2",
  },
  {
    key: 3,
    icon: UsergroupDeleteOutlined,
    label: "Stajorlar",
    title: "Option 3",
  },
  {
    key: 4,
    icon: UserOutlined,
    label: "Kadr",
    title: "Navigation One",
    open: true,
    children: [
      {
        key: 5,
        label: "Ijro intizomi",
        icon: FolderOpenOutlined,
        title: "Option 5",
      },
      {
        key: 6,
        label: "Mehnat intizomi",
        icon: UserOutlined,
        title: "Option 6",
      },
    ],
  },
  {
    key: 7,
    icon: CodepenOutlined,
    label: "Katalog",
    title: "Navigation Two",
    open: true,
    children: [
      {
        key: 9,
        icon: BranchesOutlined,
        label: "Bo’limlar/Sehlar",
        title: "Option 9",
      },
      {
        key: 10,
        icon: UserSwitchOutlined,
        label: "Lavozimlar",
        title: "Option 10",
      },
    ],
  },
]);

const selectedLink = ref(1);

function movePage(item) {
  item.open = !item.open;
  selectedLink.value = item.key;
}

function isChildActive(item) {
  return item.children?.some((child) => child?.key === selectedLink.value);
}
</script>
<template>
  <div class="side-bar-wrapper">
    <div class="content">
      <div class="logo">logo</div>
      <div class="menu">
        <!-- Menu -->
        <ul class="manu-nav parent">
          <li class="menu-nav-item" v-for="item in items" :key="item.title">
            <router-link
              to="/"
              :class="{
                active: item.open,
                selected: selectedLink === item.key,
                'child-active': isChildActive(item),
              }"
              @click="movePage(item)"
            >
              <component :is="item.icon" />
              <span>{{ item.label }}</span>
              <svg
                width="24"
                height="24"
                v-if="item.children"
                class="toggle-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.172L16.95 8.222L18.364 9.636L12 16L5.636 9.636L7.05 8.222L12 13.172Z"
                  :fill="selectedLink === item.key ? '#1B3D95' : 'white'"
                />
              </svg>
            </router-link>
            <template v-if="item.children">
              <ul
                class="manu-nav child"
                v-for="child in item.children"
                :key="child.label"
              >
                <li class="menu-nav-item">
                  <router-link
                    to="/"
                    @click="movePage(child)"
                    :class="{ selected: selectedLink === child.key }"
                  >
                    <component :is="child.icon" />
                    <span>{{ child.label }}</span>
                  </router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="log-out">
      <div class="log-out-content">
        <LogoutOutlined :style="{ fontSize: '20px' }" />
        <span>Tizimdan chiqish</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.manu-nav {
  display: flex;
  flex-direction: column;
  gap: 7px;
  list-style: none;
}
.parent {
  padding-left: 12px;
  padding-right: 12px;
}
.child {
  padding-left: 12px;
  padding-right: 0;
  transition: all 0.3s ease;
  height: 0;
  max-height: 0;
  overflow: hidden;
}

.child-active {
  background: rgba(255, 255, 255, 0.18);
}

.menu-nav-item a {
  transition: background 0.3s ease-in-out;
  border-radius: var(--b-radius);
  padding: 13px 12px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 16px;
  font-weight: 400;
  position: relative;
}
.menu-nav-item a.selected {
  background: rgba(255, 255, 255, 1);
  color: var(--primary);
}
.menu-nav-item a.selected:hover {
  background: rgba(255, 255, 255, 1);
}
.menu-nav-item a:hover {
  background: rgba(255, 255, 255, 0.09);
}
.menu-nav-item a.active .toggle-icon {
  transform: translateY(-50%) rotate(180deg);
}

.menu-nav-item a.active ~ .child {
  height: 100%;
  max-height: 10rem;
  margin-top: 7px;
}

.toggle-icon {
  position: absolute;
  transition: all 0.3s ease-in-out;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
}
.side-bar-wrapper {
  width: 292px;
  background: var(--primary);
  border-radius: var(--b-radius);
  box-shadow: var(--box-primary-shadow);
  color: #fff;
  min-height: 696px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.logo {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  padding-top: 24px;
}
.content {
  width: 100%;
}
.menu {
  margin-top: 56px;
  width: 100%;
}
.log-out {
  padding: 24px;
  margin-top: auto;
  color: #fff;
  border-top: 1px solid #fff;
}
.log-out-content {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.log-out-content span {
  margin-left: 10px;
}
.log-out-content:hover span {
  text-decoration: underline;
}
</style>