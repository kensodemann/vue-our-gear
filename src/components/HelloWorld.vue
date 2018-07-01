<template>
  <div class="hello">
    <div class="title">
      <img src="../assets/logo.png">
      <h1>{{ msg }}</h1>
      <div class="temperature-container" @click="scale = scale === 'C' ? 'F' : 'C'">
        <Temperature :scale="scale" :temperature="temperature"></Temperature>
      </div>
    </div>
    <div class="content">
      <p>
        We have all of the gear that you need to be successful with your camping experience. Don't get left
        out in the woods without our gear. You will be sorry when you are out there and unable to connect to
        the twitter-nets or the face-books.
      </p>
      <h2>Types of Gear</h2>
      <ul>
        <li>Woodsy WiFi</li>
        <li>Lakeside LAN Lines</li>
        <li>Fireside Standing Desk</li>
        <li>Moonlight Monitors</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Temperature from './Temperature';

export default {
  name: 'HelloWorld',
  components: { Temperature },
  data() {
    return {
      scale: 'C',
      temperature: 288
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  text-align: center;
}
.content {
  margin: 16px;
}
.temperature-container {
  font-size: 36px;
  cursor: pointer;
}
</style>
