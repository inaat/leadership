<template>
   <!-------Section de menue --->
          <div class="showcase-area">
            <div class="container">
              <div class="left">
                <div class="big-title">
                  <h1>What makes A,</h1>
                  <h1> GOOD  Leader </h1>
              </div>
              <p class="text">
                  Become an effective leader by playing different game elements,
                  geting score, competing with others,
                  and respecting rules of play!
              </p>
                <div class="cta">
                  <router-link :to="{ name: 'game' }"  class="btn">Get started</router-link>
                </div>
              </div>

              <div class="right">
                <img src="../../../../img/person.png" alt="Person Image" class="person" />
              </div>
              
            </div>
          </div>
           <!-------Section de How does it work  --->
      <div class="principe-titre">
        <h3 class="tit2">How does it work ?</h3>
      </div>
      <div class="showcase-area">
        <div class="container">
          <div class="right">
            <img src="../../../../img/mainbenner.png" alt="game" class="game">
          </div>
          <div class="left">

            <p class="text">
              The first step to solving any major problem in the world is having effective leadership.
              Skills Dev help u to be an effective Leader by giving u a Dozens of lessons on managing, delegating,
              communication skills,in addition to empathy, respect, and be open-mindedness,
              and how to deal with different situations....
            </p>
            <div class="cta">
              <a href="#" class="btn" id="btn">Start Now</a>
            </div>
          </div>

        </div>

      </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>


