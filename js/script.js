Vue.config.devtools = true

const root = new Vue({
	el: '#root',
	data: {
		emails: [],
	},
	methods: {
		getRandomEmails(num) {
			for (let i = 0; i < num; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
					this.emails.push(res.data.response);
					if (i === num - 1) console.log(this.emails);
				});
			}
		}
	},
	mounted() {
		this.getRandomEmails(10)
	}
});