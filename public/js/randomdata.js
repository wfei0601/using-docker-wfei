  const ul = document.getElementById('randomUser'); 
  const url = 'https://randomuser.me/api'; 
var waitingApp = new Vue({
  el: '#randomUser',
  data:{
    users:{
      name:{
        first:'',
        last:''
      }
    },
    location:{
      timezone:{
        description:''
      }
    },
    email:'',
    picture:{
      large:''
    }
  },
methods:{
     fetchusers(){
      fetch(url)
      .then(response => response.json())
        .then(json => {randomUser.users = json.results[0]});


      // then(response=>response.json())
      // then(json=>randomUser.users=json})
    }
  },
  created:function(){
this.fetchusers()

  }


});


  