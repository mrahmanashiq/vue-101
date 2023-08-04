const { createApp } = Vue;
const app = createApp({
	data() {
		return {
			characterList: {
				name: '',
				name: '',
				name: ''
			},
			count: 1,
		};
	},

	methods: {
		increamntCount() {
			this.count += 1;
		},
	},
});

app.mount('#app');
