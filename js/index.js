console.log("<3")

document.querySelector('.unblur').addEventListener('click', function(){
	console.log("unblur the porfolio!");
	document.querySelectorAll('.portfolio .columns .column').forEach((element, index) => {
		console.log(element)
		element.classList.remove('portfolio-blur')
	})
})

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
    created: function() {
        this.$nextTick(() => {
            // Make sure the 'front-end' tab is selected on content ready
            // @TODO: I dont like this pattern; change when time permits
            document.querySelector(`.skill-tabs span:first-child`).classList.add("tab-active");
        });
    }
})