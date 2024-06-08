<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            projects_endpoint: '/api/projects',
            projects: null,
            search_project: ''
        }
    },
    methods: {
        search() {
            const projects_url = this.base_api_url + this.projects_endpoint + `?search=${this.search_project}`
            console.log(projects_url);
            this.callApi(projects_url)
        },

        callApi(projects_url) {
            axios
                .get(projects_url)
                .then(resp => {
                    console.log(resp);
                    this.projects = resp.data.results
                })
                .catch(err => {
                    console.error(err)
                })
        }

    },
    mounted() {
        const projects_url = this.base_api_url + this.projects_endpoint
        console.log(projects_url);
        this.callApi(projects_url)
    }
}
</script>

<template>

    <div class="p-2 mb-4 bg-secondary">
        <div class="container-fluid py-5 text-light">
            <h1 class="display-5 fw-bold">Browse My Web Development Projects!</h1>
            <p class="col-md-8 fs-4 p-2">
                I'm Luca, a passionate and creative web developer. Explore my projects to see how i transform
                innovative ideas into extraordinary digital experiences. From responsive websites to interactive web
                applications, each project showcases my dedication to intuitive design and flawless functionality.

                Scroll down to see my work and get inspired!
            </p>

            <form @submit.prevent="search()">
                <div class="input-group mb-3">
                    <input type="search" class="form-control" placeholder="search..." v-model="search_project">
                    <button class="btn btn-outline-light" type="submit">
                        <i class="fas fa-search fa-lg fa-fw"></i>
                    </button>
                </div>
            </form>


        </div>
    </div>


    <section class="projects" v-if="projects">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-4">
                <div class="col" v-for="project in projects">
                    <div class="card h-100">

                        <template v-if="project.screenshot_site">
                            <img :src="project.screenshot_site.startsWith('upload') ? base_api_url + '/storage/' + project.screenshot_site : project.screenshot_site"
                                :alt="'image of project' + project.title">
                        </template>

                        <template v-else>
                            <img src="/src/assets/img/image_not_available.png" alt="image not available">
                        </template>


                        <div class="card-body">
                            {{ project.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </section>
</template>

<style></style>