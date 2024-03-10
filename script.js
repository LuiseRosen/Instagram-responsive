let posts = [
    {
        "name": ['derfeschefritz'],
        "profilePic": ['./img/user/derfeschefritz.png'],
        "photo": ['./img/post/derfeschefritz.png'],
        "likes": [19],
        "liked": [false],
        "title": ['drawn from a specimen @umu.museum #anatomydrawing #wetspecimen #eiguggemoldo'],
        "commentators": ['past_mortems', 'merlinalbrecht'],
        "comments": ['Love it!', 'Cool!']
    },
    {
        "name": ['kupferdieb'],
        "profilePic": ['./img/user/kupferdieb.png'],
        "photo": ['./img/post/kupferdieb.png'],
        "likes": [106],
        "liked": [false],
        "title": ['Da passiert was...'],
        "commentators": ['atnabella'],
        "comments": ['Was passiert denn...???']
    },
    {
        "name": ['purlchaos'],
        "profilePic": ['img/user/purlchaos.png'],
        "photo": ['./img/post/purlchaos.png'],
        "likes": [43],
        "liked": [false],
        "title": ['My first ever test knit was the Arachne Pullover by @hookmountainhandmade. The pattern is out now! Right on time for spooky season!'],
        "commentators": ['hookmountainhandmade'],
        "comments": ['Thank you so much for testing this pattern!! Your Arachne is beautiful!']
    },
];

let stories = [
    {
        "names": ['strong.sistas', 'meeri_mel', '_kleinmann_', 'developer.akademie', 'thegoodsitter'],
        "profilePics": ["./img/user/strong.sistas.png", "./img/user/meeri_mel.png", "./img/user/_kleinmann_.png", "./img/user/developer.akademie.png", "./img/user/thegoodsitter.png"]
    }
]

let suggestedAccounts = [
    {
        "names": ['niko.stadtrand', 'psycho.by.code', 'rosen1727', 'trescarla', 'lovradose'],
        "profilePics": ['./img/user/niko_stadtrand.png', './img/user/psycho.by.code.png', './img/user/rosen1727.png', './img/user/trescarla.png', './img/user/lovradose.png']
    }
];

load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += templateContent();

    renderStories();
    renderPosts();
    renderSuggestedAccounts();
}

function renderPosts() {
    let postsContent = document.getElementById('posts');
    postsContent.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        let newPost = posts[i];

        let pic = newPost['profilePic'];
        let name = newPost['name'];
        let photo = newPost['photo'];
        let likes = newPost['likes'];
        let title = newPost['title'];

        postsContent.innerHTML += templatePost(i, pic, name, photo, title);
        renderLikes(i, likes);
    }
}

function renderStories() {
    let storiesContent = document.getElementById('stories');
    storiesContent.innerHTML = '';

    for (let i = 0; i < stories.length; i++) {
        let newStory = stories[i];

        for (let a = 0; a < newStory['names'].length; a++) {
            const pic = newStory['profilePics'][a];
            const name = newStory['names'][a];
            storiesContent.innerHTML += templateStory(a, pic, name);
        }
    }
}

function renderSuggestedAccounts() {
    let suggestedAccountsContent = document.getElementById('suggestedAccounts');
    suggestedAccountsContent.innerHTML = '';

    for (let i = 0; i < suggestedAccounts.length; i++) {
        let newSuggestion = suggestedAccounts[i];

        for (let a = 0; a < newSuggestion['names'].length; a++) {
            const pic = newSuggestion['profilePics'][a];
            const name = newSuggestion['names'][a];
            suggestedAccountsContent.innerHTML += templateSuggestedAccount(a, pic, name);
        }
    }
}

function renderLikes(i, likeCount) {
    let likesMainContent = document.getElementById(`likesMain${i}`);
    let likeMain = document.getElementById(`likeMain${i}`);
    let liked = posts[i]['liked'];

    if (liked == 'true') {
        likeMain.src = './icons/heart_red_like_icon.svg'; // ändert das Herz-Icon im Hauptfenster zu rot
        likeCount++;
    } else if (liked == 'false') {
        likeMain.src = './icons/heart_like_notifications_icon.svg';
    }

    likesMainContent.innerHTML = '';
    likesMainContent.innerHTML += templateLikes(likeCount);
}

function renderLikesComments(i, likeCount) {
    let liked = posts[i]['liked'];
    let likesCommentContent = document.getElementById(`likesComment${i}`);
    let likeComment = document.getElementById(`likeComment${i}`);

    if (liked == 'true') {
        likeComment.src = './icons/heart_red_like_icon.svg'; // ändert das Herz-Icon im Kommentar-Fenster zu rot
        likeCount++;
    } else if (liked == 'false') {
        likeComment.src = './icons/heart_like_notifications_icon.svg';
    }
    likesCommentContent.innerHTML = '';
    likesCommentContent.innerHTML += templateLikes(likeCount);
}

function like(i) {
    let likeCount = posts[i]['likes'];
    let liked = posts[i]['liked'];

    if (liked == 'false') {
        liked.pop(); // 'false' wird aus dem Array gelöscht
        liked.push(true); // 'true' wird staddessen hinzugefügt
        save();

    } else if (liked == 'true') {
        liked.pop();
        liked.push(false);
        save();

    }

    renderLikes(i, likeCount);
    renderLikesComments(i, likeCount);
    // wenn ich ihn hier änderte wurde der neue likeCount (Anzahl der likes nach dem liken) aus irgendeinem Grund nicht im local Storage abgespeichert
}

function savePost() { // wenn man das hier auch im local storage speichern wollte, müsste man eine Funktion wie bei den likes machen, nur ohne den likeCount
    let savePost = document.getElementById('savePost');
    let savePostComments = document.getElementById('savePostComments');

    savePost.classList.toggle('solid'); // fügt abwechselnd dem Element die Klasse 'solid' hinzu und entfernt sie 
    savePostComments.classList.toggle('solid');
}

function viewComments(i) {
    let photo = posts[i]['photo'];
    let pic = posts[i]['profilePic'];
    let name = posts[i]['name'];
    let title = posts[i]['title'];
    let likes = posts[i]['likes'];

    let showComments = document.getElementById('showComments');
    showComments.classList.remove('display-none');
    showComments.innerHTML = '';
    showComments.innerHTML += templateShowComments(i, photo, pic, name, title, likes); //
    renderComments(i);
    renderLikesComments(i, likes)
}

function renderComments(i) {
    let commentDisplaySection = document.getElementById('commentDisplaySection');
    let commentedPost = posts[i];
    commentDisplaySection.innerHTML = '';

    for (let a = 0; a < commentedPost['comments'].length; a++) {
        let comment = commentedPost['comments'][a];
        let commentator = commentedPost['commentators'][a];

        commentDisplaySection.innerHTML += templateComment(commentator, comment);
    }


}

function closeComments(i, likes) {
    let showComments = document.getElementById('showComments');
    showComments.classList.add('display-none');
}

function addComment1(i) {
    let newComment = document.getElementById(`newComment1${i}`).value;
    let commentators = posts[i]['commentators'];
    let comments = posts[i]['comments'];

    if (newComment === '') {
        window.alert("please write a comment");
    } else {
        comments.push(newComment);
        commentators.push('You');
        save();
        document.getElementById(`newComment1${i}`).value = '';
    
        let myComment = document.getElementById(`myComment${i}`);
        myComment.innerHTML += templateComment('You', newComment);
    }

    
}

function addComment2(i) {
    let newComment = document.getElementById(`newComment2${i}`).value;
    let commentators = posts[i]['commentators'];
    let comments = posts[i]['comments'];
    if (newComment === '') {
        window.alert("please write a comment");
    } else {
        comments.push(newComment);
        commentators.push('You');
        renderComments(i);
        save();
        document.getElementById(`newComment2${i}`).value = '';
    }
    
}

function save() {
    let postsAsText = JSON.stringify(posts); // wandelt den Inhalt des Arrays posts in string um und weist ihn der Variablen postsAsText zu
    localStorage.setItem('posts', postsAsText); // speichert im local storage unter dem Key posts den Inhalt der Variablen postsAsText ab
}

function load() { // Variablen als Arrays aus dem Local Storage raus laden
    let postsAsText = localStorage.getItem('posts'); // definiert die Variable postsAsText als den string aus dem Local Storage unter dem Key posts

    if (postsAsText) { // Abfrage: existiert postsAsText im Local Storage? denn wenn nichts im Local Storage vorhanden ist, funktioniert das nicht
        posts = JSON.parse(postsAsText);
    }
}