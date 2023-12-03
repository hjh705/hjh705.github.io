join = document.getElementById('joinWindow');
roadmap = document.getElementById('roadmapWindow');
introduce = document.getElementById('introduceWindow');
trip = document.getElementById('tripWindow');




function showJoin() {
    joinVisible = join.style.opacity === '1';

    if(roadmap.style.opacity === '1'){
        showRoadmap();
    }
    if(introduce.style.opacity === '1'){
        showIntroduce();
    }
    if(trip.style.opacity === '1'){
        showTrip();
    }

    if(joinVisible){
        join.style.opacity = '0';
        join.style.left = '-9999px';
    } else {
        join.style.opacity = '1';
        join.style.left = '10%';
    }
}

function showRoadmap(){
    roadmapVisible = roadmap.style.opacity === '1';

    if(join.style.opacity === '1'){
        showJoin();
    }
    if(introduce.style.opacity === '1'){
        showIntroduce();
    }
    if(trip.style.opacity === '1'){
        showTrip();
    }

    if(roadmapVisible){
        roadmap.style.opacity = '0';
        roadmap.style.left = '-9999px';
    } else{
        roadmap.style.opacity = '1';
        roadmap.style.left = '10%';
    }
}

function showIntroduce(){
    introduceVisible = introduce.style.opacity === '1';

    if(join.style.opacity === '1'){
        showJoin();
    }
    if(roadmap.style.opacity === '1'){
        showRoadmap();
    }
    if(trip.style.opacity === '1'){
        showTrip();
    }

    if(introduceVisible){
        introduce.style.opacity = '0';
        introduce.style.left = '-9999px';
    } else{
        introduce.style.opacity = '1';
        introduce.style.left = '10%';
    }
}

function showTrip(){
    tripVisible = trip.style.opacity === '1';

    if(join.style.opacity === '1'){
        showJoin();
    }
    if(roadmap.style.opacity === '1'){
        showRoadmap();
    }
    if(introduce.style.opacity === '1'){
        showIntroduce();
    }

    if(tripVisible){
        trip.style.opacity = '0';
        trip.style.left = '-9999px';
    } else{
        trip.style.opacity = '1';
        trip.style.left = '10%';
    }
}