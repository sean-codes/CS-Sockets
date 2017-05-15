cs.objects['obj_build'] = {
    create: function(){
        this.width = 16;
        this.height = 16;
    },
    step: function(){
        var dx = 0;
        var dy = 0;

        while(dx < cs.room.info.width){
            cs.draw.width(cs.camera.scale);
            cs.draw.line(dx, 0, dx, cs.room.info.height);
            dx += 16;
        }
        while(dy < cs.room.info.height){
            cs.draw.width(cs.camera.scale);
            cs.draw.line(0, dy, cs.room.info.width, dy);
            dy += 16;
        }

        cs.draw.alpha(0.5);
        dx = Math.floor(cs.mouse.x / 16) * 16;
        dy = Math.floor(cs.mouse.y / 16) * 16;
        cs.draw.rectangle(dx, dy, 16, 16, true);
    }
}
