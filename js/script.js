Vue.config.devtools = true

const root = new Vue({
	el: '#root',
	data: {
		message: 'Hello Vue!'
	}
})

axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
	console.log(res.data);
})