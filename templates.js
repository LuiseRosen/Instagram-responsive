function templateContent() {
    return `
<div class="navbar-left">
    <img class="insta-lettering responsive-d-none" src="./img/instagram_lettering.png" alt="">

    <a class="navLink home" href="#">
        <div><img class="margin icon" src="./icons/home_icon.svg" alt=""></div>
        <div class="responsive-d-none">Home</div>
    </a>
    <a class="navLink search" href="#">
        <div><img class="margin icon" src="./icons/search_icon.svg" alt=""></div>
        <div class="responsive-d-none">Search</div>
    </a>
    <a class="navLink explore" href="#">
        <div><img class="margin icon" src="./icons/explore_icon.svg" alt=""></div>
        <div class="responsive-d-none">Explore</div>
    </a>
    <a class="navLink reels" href="#">
        <div><img class="margin icon" src="./icons/reels_icon.svg" alt=""></div>
        <div class="responsive-d-none">Reels</div>
    </a>
    <a class="navLink messages" href="#">
        <div><img class="margin icon" src="./icons/messages_icon.svg" alt=""></div>
        <div class="responsive-d-none">Messages</div>
    </a>
    <a class="navLink notifications" href="#">
        <div><img class="margin icon" src="./icons/heart_like_notifications_icon.svg" alt=""></div>
        <div class="responsive-d-none">Notifications</div>
    </a>
    <a class="navLink create" href="#">
        <div><img class="margin icon" src="./icons/create_icon.svg" alt=""></div>
        <div class="responsive-d-none">Create</div>
    </a>
    <a class="navLink profile" href="#">
        <div><img class="margin icon profilePic" src="./img/user/merlinalbrecht.jpg" alt=""></div>
        <div class="responsive-d-none">Profile</div>
    </a>
    <div class="navLink spaceholder" id="" href=""></div>
    <a class="navLink threads" href="#">
        <div><img class="margin icon" src="./icons/thread_icon.svg" alt=""></div>
        <div class="responsive-d-none">Threads</div>
    </a>
    <a class="navLink more" href="#">
        <div><img class="margin icon" src="./icons/more_icon.svg" alt=""></div>
        <div class="responsive-d-none">More</div>
    </a>
    <div class="separator vertical"></div>
</div>


<div class="main-center">

    <div class="feedOptionsContainer">
        <div class="feedOptions">
            <a class="" href="#">For you</a>
            <a class="gray" href="#">Following</a>
        </div>
        <div class="separator horizontal"></div>
    </div>



    <div id="stories" class="stories"></div>

    <div id="posts" class="posts"></div>

</div>

<div class="bar-right">

    <div class="myAccountContainer">
        <span class="myAccount">
            <img class="profilePic" src="./img/user/merlinalbrecht.jpg" alt="">
            <span class="username">merlinalbrecht</span>
        </span>
        <span class="follow">Switch</span>
    </div>

    <div class="suggestedHeadline">
        <h2 class="gray">SuggestedForYou</h2>
        <a class="gray-hover" href="#">See All</a>
    </div>

    <div id="suggestedAccounts" class="suggestedAccounts"></div>

    <div class="footer gray">
        <a class="gray">About</a> <span>.</span>
        <a class="gray">Help</a> <span>.</span>
        <a class="gray">Press</a> <span>.</span>
        <a class="gray">API</a> <span>.</span>
        <a class="gray">Jobs</a> <span>.</span>
        <a class="gray">Privacy</a> <span>.</span> <br>
        <a class="gray">Terms and imprint</a> <span>.</span>
        <a class="gray">UrhDaG/MStV</a> <span>.</span>
        <a class="gray">Locations</a> <span>.</span>
        <a class="gray">Language</a> <span>.</span>
        <a class="gray">Meta Verified</a>
        <br><br>
        © 2024 INSTAGRAM FROM META
    </div>
</div>
    `;
}

function templatePost(i, pic, name, photo, title) {
    return `
        <div class="post" id="post${i}">
            <div class="postHeadline" id="postHeadline">
                <div class="author">
                    <img class="profilePic" src="${pic}" alt="">
                    <div class="username">${name}</div>
                </div>

                <img class="moreOptions icon" src="./icons/more_options_icon.svg" alt="">
            </div>
            <img class="postedImg" src="${photo}" alt="">
            <div class="postInteraction">
                <div class="likeCommentSend">


                    <img onclick="like(${i})" id="likeMain${i}" class="margin like icon"
                        src="./icons/heart_like_notifications_icon.svg" alt="">


                    <label for="newComment1${i}"><img class="margin icon" src="./icons/comment_icon.svg" alt=""></label>
                    <img class="margin send icon" src="./icons/messages_icon.svg" alt="">
                </div>
                <img onclick="savePost()" id="savePost" class="save icon" src="./icons/save_icon.svg" alt="">
            </div>

            <div class="likes" id="likesMain${i}"></div>

            <div class="photoDescription">
                <span class="photoTitle" id="photoTitle">
                    <span class="username">${name}</span>
                    ${title}
                </span>
            </div>
            <div class="commentSection">
            
            <div id="myComment${i}"></div>

                <div onclick="viewComments(${i})" class="viewComments gray" id="viewComments">View all comments</div>

                <div class="newCommentContainer">
                    <textarea id="newComment1${i}" class="newComment" placeholder="Add a comment..." name="" cols="55" rows="1"></textarea>
                    <button onclick="addComment1(${i})" id="postBtn" class="postBtn">Post</button>
                </div>
            </div>
        </div>
    `;
}

function templateShowComments(i, photo, pic, name, title, likes) { //
    return `
        <div class="display-flex">
            <button onclick="closeComments(${i}, ${likes})" id="closeBtn" class="closeBtn"> 
                <img class="icon" src="./icons/close_icon.svg" alt="">
            </button>
            <div class="commentPageContainer display-flex">
                <div class="commentPageContainer-left">
                    <img class="postedImg" src="${photo}" alt="">
                </div>
                <div class="commentPageContainer-right">
                    <div class="photoDescription">
                    <img class="profilePic" src="${pic}" alt="">
                        <span class="photoTitle" id="photoTitle">
                            <span class="username">${name}</span>
                            ${title}
                        </span>
                    </div>
                    <div class="separator horizontal"></div>

                    <div id="commentDisplaySection" class="commentDisplaySection"></div>

                    <div class="postInteraction">
                        <div class="likeCommentSend">
                            <img onclick="like(${i})" id="likeComment${i}" class="margin like icon"
                                src="" alt="">
                                <label for="newComment2${i}"><img class="margin icon" src="./icons/comment_icon.svg" alt=""></label>
                            <img class="margin send icon" src="./icons/messages_icon.svg" alt="">
                        </div>
                        <img onclick="savePost()" id="savePostComments" class="save icon" src="./icons/save_icon.svg" alt="">
                    </div>

                    <div class="likes" id="likesComment${i}"></div>

                    <div class="commentSection">
                        <div class="newCommentContainer">
                            <textarea id="newComment2${i}" class="newComment" placeholder="Add a comment..." name=""
                                cols="55" rows="1"></textarea>
                            <button onclick="addComment2(${i})" id="postBtn" class="postBtn">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function templateComment(commentator, comment) {
    return `
        <div class="photoDescription">
            <div class="comment">
                <span class="username">${commentator}</span>
                ${comment}
            </div> 
        </div>
    `
}

function templateStory(a, pic, name) {
    return `
        <div class="story" id="story${a}">
            <img class="profilePic" src="${pic}" alt="">
            <div class="username">${name}</div>
        </div>
    `;
}

function templateSuggestedAccount(a, pic, name) {
    return `
    <div class="suggestedContainer" id="suggested${a}">
        <span class="suggestedAccount">
            <img class="profilePic" src="${pic}" alt="">
            <span class="suggestedNameReasonContainer">
                <span class="username">${name}</span>
                <span class="suggestedReason gray">Suggested for you</span>
            </span>
        </span>
        <span class="follow">Follow</span>
    </div>
    `
}

function templateLikes(likes) {
    return `
    ${likes} likes
    `
}