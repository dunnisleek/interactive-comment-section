const app = Vue.createApp({
  data() {
    return {
      count: 12,
      counter: 5,
      showModal: false,
      awesome: true,
      firstDisplay: false,
      message: "",
      messageTwo: "",
      commentTwo: [],
      comment: [],
     
      data: {
        currentUser: {
          image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
          createdAt: "1 month ago",
          content:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",

          comments: [
            {
              id: 1,
              content:
                "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
              createdAt: "1 month ago",
              score: 12,
              user: {
                image: {
                  png: "./images/avatars/image-amyrobson.png",
                  webp: "./images/avatars/image-amyrobson.webp",
                },

                username: "amyrobson",
              },

              replies: [],
            },

            {
              id: 2,
              content:
                "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
              createdAt: "2 weeks ago",
              score: 5,
              usernameTwo: "maxblagun",
              user: {
                image: {
                  png: "./images/avatars/image-maxblagun.png",
                  webp: "./images/avatars/image-maxblagun.webp",
                },
                username: "maxblagun",
              },

              replies: [
                {
                  id: 3,
                  content:
                    "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                  createdAt: "1 week ago",
                  score: 4,
                  replyingTo: "maxblagun",
                  user: {
                    image: {
                      png: "./images/avatars/image-ramsesmiron.png",
                      webp: "./images/avatars/image-ramsesmiron.webp",
                    },
                    usernameThree: "ramsesmiron",
                  },
                },
                {
                  id: 4,
                  content:
                    "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                  createdAt: "2 days ago",
                  score: 2,
                  replyingTo: "ramsesmiron",
                  user: {
                    image: {
                      png: "./images/avatars/image-juliusomo.png",
                      webp: "./images/avatars/image-juliusomo.webp",
                    },
                    username: "juliusomo",
                  },
                },
              ],
            },
          ],
        },
      },
    };
  },

  methods: {
    showComment() {
      this.awesome = !this.awesome;
    },
    incrementCount() {
      this.count++;
      
    },
    decrementCount() {
      if(this.count > 0){
        this.count--;  
      }
    },
    incrementCounter(){
      this.counter++;
    },
    decrementCounter(){
      if(this.counter > 0){
      this.counter--
      }
    },
    showFirstDisplay() {
      this.firstDisplay = !this.firstDisplay;
    },
    showModalCall() {
      this.showModal = true;
    },
    closeModalCall() {
      this.showModal = false;
    },
    addComment() {
      this.comment.push(this.message)
      
       
    
      
        
    },
  
    // addComment() {this.comment.push(this.message)

    // },

    addCommentTwo() {
     this.commentTwo.push(this.messageTwo);
      
    },
    removeGoal(idx) {
      this.commentTwo.splice(idx, 1);
      this.comment.splice(idx, 1);
    },
  },
});

app.mount("#app");

// const app2 = Vue.createApp({
//     data(){
//       return{
//        counter:0

//     }
//     },

// });
// app2.mount('#formcomment')
