console.log("burnin'")

let skills = new Vue({
    el: '#skills',
    data: {
        skilltabs: [
            'front-end',
            'back-end',
            'organizational'
        ],
        currentTab: 'front-end'
    },
    methods: {
        displaySkillset: (event, newTab) => {            
            // Remove and apply active tab styling to the appropriate tag when clicked
            document.querySelectorAll('.skill-tabs span').forEach((element, index) => {
                element.classList.remove("tab-active");
            });
            event.target.classList.add("tab-active");
            // Set the new current tab
            if (typeof newTab == 'undefined') {
                console.error('new tab hasnt been defined');
                return false;
            }
            skills.currentTab = newTab;
        }
    },
    mounted: function() {
        this.$nextTick(() => {
            // Make sure the 'front-end' tab is selected on content ready
            // @TODO: I dont like this pattern; change when time permits
            document.querySelector(`.skill-tabs span:first-child`).classList.add("tab-active");
        });
    }
})