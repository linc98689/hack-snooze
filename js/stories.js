"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;
let favoriteList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  let li = $(`
  <li >
    <a href="${story.url}" target="a_blank" class="story-link">
      ${story.title}
    </a>
    <small class="story-hostname">(${hostName})</small>
    <small class="story-author">by ${story.author}</small>
    <small class="story-user">posted by ${story.username}</small>
  </li>
`);

  let btn = $(`<button id="${story.storyId}" class="story story-favorite"><i class="fas fa-heart"></i></button>`);
  btn.on('click', storyBtnClick);
  li.prepend(btn);

  return li;
}

/**
 * handle click on favorite button
 */
function storyBtnClick(evt){
  console.log(this);
  let storyId = $(this).id;
  if(this.classList.contains("story-favorite")){//change to unfavorite
      this.innerHTML = '<i class="far fa-heart"></i>';
      this.classList.replace('story-favorite', 'story-unfavorite');
  }
  else{ //change to favorite
    this.innerHTML = '<i class="fas fa-heart"></i>';
    this.classList.replace('story-unfavorite', 'story-favorite');
  }
  
}



/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/** post a new story and show it in story-list */
async function postStoryAndShow(newStory){
   let story = await storyList.addStory(currentUser, newStory);
   const $elementStory = generateStoryMarkup(story);
   $allStoriesList.prepend($elementStory);
   $allStoriesList.show();
}

/** delete a story and update db 
 * return story deleted if success; null otherwise
 * note: can only delete story created by currentUser
*/
async function removeStoryFromStoryList(storyId){
  try{
    let url = `${BASE_URL}/stories/${storyId}`;
    let data = {token:currentUser.loginToken};
    let res = await axios({
      url,
      method:"DELETE",
      data,
    })
    console.log(res);
    return res.data.story; // success
  }
  catch(err){
    console.log("Error in adding a story to favoriate", err);
    return null; //failure
  }
}

/** update favoriteList */
function btnUpdateFavoriteClick(){

}
$btnUpdateFavorite.on("click", btnUpdateFavoriteClick);