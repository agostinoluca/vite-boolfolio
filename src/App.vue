<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            projects_endpoint: '/api/projects',
            projects: null
        }
    },
    mounted() {
        const projects_url = this.base_api_url + this.projects_endpoint
        console.log(projects_url);
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
}
</script>

<template>
    <h1>Projects</h1>
    <section class="projects" v-if="projects">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-4">
                <div class="col" v-for="project in projects">
                    <div class="card">
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