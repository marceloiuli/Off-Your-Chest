# Secret Safe

Secret Safe is an anonymous app I developed for users who wish to post a secret anonymously on the internet. Many users of social media have admitted to "not posting" due to the idea someone will try to use their post to embarass them. I felt that being able to say what you feel is a right everyone should have. By saying it or posting it on the internet, this app could be a helpful route for those who don't wish to have their personal thoughts tied to an account all their friends and family can see. I've worked hard to ensure anonymity with the knowledge I've learned so users could feel safe that their thoughts or secrets can be shared without the fear of embarrassment.


Home Screen:
<img src=""/>


## Technologies Used:

*HTML
*CSS
*JavaScript
*Node.js
*Express
*MongoDB
*Mongoose


### Getting Started

[Try Secret Safe Here](url "alt text")

1. First things first, you have to log in to access all the features provided in the app. The log in is tied to your google account although none of your information will be accessible to other users. Be sure to read the rules of the app.

2. After logging in, the All Posts page is accessible to the user in the nav bar at the top of the screen. Clicking on it will redirect the user to see all secrets/posts with a small twist. Why do all the posts look redacted? Well thats because it's by design, to view a specific post the user needs to click on the View Details link under the details column on the right.
<img src=""/>

3. Once clicked, the user will render the show page to be able to see the details associated with that post. That includes when the post was made and the actual content of the post. Depending on if the user who made the post chose to allow comments, you may also see the comments posted while the ability to make a comment is accessible to the viewer.

4. If the user decides to make a comment on a post, the user will need to add text to the area under New Comment and choose a rating between "keep it to yourself", "mid", and "juicy". To post a comment the user must hover over the small black bar to reveal the Post Comment text and click to submit it in the commment section.
<img src=""/>

5. To post a secret, the user will need to navigate their cursor over the Add A Post link on the top of the page in the navigation bar and click on it. After rendering the New Post Page, it's required to add text to the Post Title text area and Content area. Allowing comments is an option the user has. The user can click on the box under Allow Comments to add a blue check mark to the box thus allowing comments to be made on the user's post. Leaving the box empty will disable commenting and rating on your post.

6. Hypothetically, if the user has comments they don't wish to see, the user can update their post by viewing it in the show page. By viewing the post in the show page, the user who has made that post can then see two black bars under the content in the post details. The top bar, after hovering your cursor on it, will be able to update your post. The user can update their post content and the option to disable comments. By changing the option to comment, all previous comments and the ability to make a comment will be disabled. Under the all black top bar, the delete post button is also available to delete the post and all commments associated with it. Only the creator of the post may update or delete the post.
<img src=""/>

7. If a user has made a comment they wish to remove, on the right side of the rating column in the comment section there is a small black box. By hovering over that box a small red "x" will be seen and by clicking it the user has the ability to delete their comment.
<img src=""/>

8. Logging out of the app will redirect you back to the home page!

#### Next Steps:

* I would like to add a profile page for each user. The profile page should link all posts the user made along with the posts that user has commented on. The posts they commented on should also be readable unless the user who made that post deleted it.

* Adding a login tied to the site itself could be a fun and interesting way to ensure user's information is safe.

* Adding notifications when a user's post is interacted with could be fun for the user.

* Perhaps adding a photo or video alongside a post would be an interesting way for people to add context to their secrets as long as it's not used for harassment and bullying.

* Being able to see posts related to others by title, but that only makes sense if there were alot more posts.