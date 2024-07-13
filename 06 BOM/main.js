if ("credentials" in navigator) {
    navigator.credentials.get({ password: true }).then((creds) => {
        //Do something with the credentials.
    });
} else {
    //Handle sign-in the way you did before.
}


navigator.geolocation.getCurrentPosition(res => {
    console.log(res);
}, err => console.error(err));

//...continue

screen.orientation.onchange = ((e) => {
    console.log(); ("rotated")
})

// history.back();
// history.go(-3);
// history.forward();

location.reload();
location.assign("https://apple.com"); // save history
location.replace("https://apple.com"); // does not