Vue.component('dosukoi-box' , {
    template: `
    <div class="alert" v-on:click="caution">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `,
    methods: {
        caution: function() {
            alert("クリックされました");
        }
    }
});
var app = new Vue({
    el: "#app",
    data: {
        aiue: "Hello World",
        error: true,
        akanisitai: "akadesu",
        now: "00:00:00",
        kenlist: [
            { name: '北海道' },
            { name: '青森' },
            { name: '岩手' },
            { name: '秋田' },
        ]
    },
    methods: {
        time: function (e) {
            const date = new Date();
            this.now =
                date.getHours() + ":" +
                date.getMinutes() + ":" +
                date.getSeconds();
        },
        shuffle: function () {
            this.kenlist = _.shuffle(this.kenlist);
        },
    }
});