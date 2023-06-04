let objStory = {
    "author": "Elie Schoppik",
    "createdAt": "2018-11-14T01:36:12.710Z",
    "storyId": "991b95a0-507f-472e-9f94-e3bd4b6fe882",
    "title": "Four Tips for Moving Faster as a Developer",
    "updatedAt": "2018-11-14T01:36:12.710Z",
    "url": "https://www.rithmschool.com/blog/developer-productivity",
    "username": "test"
  };
let story = new Story(objStory);
console.log(story.getHostName());
/** 
curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"user":{"name":"Jane Smith","username":"jane","password":"mypassword"}}' \
      https://hack-or-snooze-v3.herokuapp.com/signup

      {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphbmUiLCJpYXQiOjE2ODU3OTM4Mjd9.W3u2OZzZlfeNi2K3ExK5lgS-D-htcAs7InzFFa443IA","user":{"createdAt":"2023-06-03T12:03:47.097Z","favorites":[],"name":"Jane Smith","stories":[],"updatedAt":"2023-06-03T12:03:47.097Z","username":"jane"}}    
      
      

*/

let newStory = {
  author: "Greg Kumparak",
  title: "Awesome Netflix/Fitbit Hack Detects When You’ve Fallen Asleep, Auto-Pauses Your Movie",
  url:"https://techcrunch.com/2014/02/27/netflix-fitbit-hack/"
};

let ns = await StoryList.addStory(currentUser, newStory);

/** favourites */
https://hack-or-snooze-v3.herokuapp.com/users/hueter/favorites/32d336da-98cd-4010-bb39-1d789b9bef50

/** 
*<i class="fa-solid fa-heart"></i>
*<i class="fa-regular fa-heart"></i>
*/

