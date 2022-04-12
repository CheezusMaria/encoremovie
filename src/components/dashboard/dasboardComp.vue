<template>
  <div class="container dashboard_container">
    <div class="admin_nav">
      <ul>
        <li>
          <router-link to="/dashboard/addPost">Add Posts</router-link>
          <router-link to="/dashboard/managePost">Manage Posts</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
