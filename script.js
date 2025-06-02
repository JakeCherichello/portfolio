new Vue({
      el: '#projectGalleryApp',
      data: {
        projects: [],
        filteredProjects: [],
        activeFilter: 'all',
        loading: true
      },
      mounted() {
        this.fetchProjects();
      },
      methods: {
        fetchProjects() {
          setTimeout(() => {
            this.projects = [
              { id: 1, title: 'Magic 8 Ball Website', image: 'img/8ball.png', category: 'appDevelopment', link: 'https://github.com/JakeCherichello/Magiceight', tags: ['JavaScript', 'Fun'] },
              { id: 2, title: 'Rock Paper Scissors Website', image: 'img/rps.png', category: 'appDevelopment', link: 'https://github.com/JakeCherichello/RPS', tags: ['Game', 'JavaScript'] },
              { id: 3, title: 'Trunk or Treat Website', image: 'img/trunk.png', category: 'webDesign', link: 'https://github.com/JakeCherichello/trunkortreat', tags: ['HTML', 'CSS'] },
              { id: 4, title: 'Schedule Website', image: 'img/sched.png', category: 'appDevelopment', link: 'https://github.com/JakeCherichello/classes', tags: ['Vue', 'Productivity'] },
              { id: 5, title: 'Little Bird Toy Company', image: 'img/lbtc.png', category: 'webDesign', link: 'https://matthewpass24.github.io/Final-Website/', tags: ['E-commerce', 'Design'] },
              { id: 6, title: 'Santa Animation', image: 'img/santa.png', category: 'animation', link: 'https://jakecherichello.github.io/Christmas/', tags: ['Animation', 'Holiday'] },
              { id: 7, title: 'Tip Calculator', image: 'img/tip.png', category: 'appDevelopment', link: 'https://github.com/JakeCherichello/tip-calculator', tags: ['Calculator', 'Vue'] },
              { id: 8, title: 'Spider Animation', image: 'img/spider.png', category: 'animation', link: 'https://github.com/JakeCherichello/Animation2.html?id=8', tags: ['Animation', 'CSS'] },
              { id: 9, title: 'Lottery App', image: 'img/lottery.png', category: 'appDevelopment', link: 'https://jakecherichello.github.io/Lottery/', tags: ['Random', 'JavaScript'] }
            ];
            this.filteredProjects = [...this.projects];
            this.loading = false;
          }, 800);
        },
        filterProjects(category) {
          this.activeFilter = category;
          this.loading = true;
          setTimeout(() => {
            if (category === 'all') {
              this.filteredProjects = [...this.projects];
            } else {
              this.filteredProjects = this.projects.filter(p => p.category === category);
            }
            this.loading = false;
          }, 400);
        }
      }
    });