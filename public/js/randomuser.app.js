var randomuser = new Vue(
  {
    el:"#randomuser",
    data:{
      user: []
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {randomuser.user = json});
    }
  },
  created() {
    this.fetchUser()
  }
}
);
