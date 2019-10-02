$( document ).ready(function() {

    var userFeed = new Instafeed({
    get: 'user' ,
    userId: '12557095608' ,
    limit :6,
    resolution: 'standard_resolution',
    accessToken: '12557095608.1677ed0.367a8fe7331446998a81d4c0c274a691',
    sortBy: 'most-recent',
    template: '<div class="col-lg-2 gallery instaimg"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run ();


});