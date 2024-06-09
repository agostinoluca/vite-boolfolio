<script>
import { state } from '../state';

export default {
    name: 'ProjectCard',

    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <section class="projects" v-if="state.projects">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-4">
                <div class="col" v-for="project in state.projects.data">
                    <div class="card h-100">

                        <template v-if="project.screenshot_site">
                            <img :src="project.screenshot_site.startsWith('upload') ? state.base_api_url + '/storage/' + project.screenshot_site : project.screenshot_site"
                                :alt="'image of project' + project.title">
                        </template>

                        <template v-else>
                            <img src="/src/assets/img/image_not_available.png" alt="image not available">
                        </template>


                        <div class="card-body text-center">
                            <span class="fs-5 text-uppercase">
                                {{ project.title }}
                            </span>
                        </div>

                        <div class="card-footer text-center">
                            <!-- Modal trigger button -->
                            <button type="button" class="btn btn-transparent text-info" data-bs-toggle="modal"
                                :data-bs-target="`#project-${project.id}`">
                                Learn more <i class="fa-solid fa-magnifying-glass"></i>
                            </button>

                            <!-- Modal Body -->
                            <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
                            <div class="modal fade" :id="`project-${project.id}`" tabindex="-1"
                                data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
                                :aria-labelledby="`modalTitle-${project.id}`" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
                                    role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-uppercase" :id="`modalTitle-${project.id}`">
                                                {{ project.title }}
                                            </h5>
                                        </div>
                                        <template v-if="project.screenshot_site">
                                            <img class="m-auto"
                                                :src="project.screenshot_site.startsWith('upload') ? state.base_api_url + '/storage/' + project.screenshot_site : project.screenshot_site"
                                                :alt="'image of project' + project.title">
                                        </template>

                                        <template v-else>
                                            <img class="m-auto" src="/src/assets/img/image_not_available.png"
                                                alt="image not available">
                                        </template>
                                        <div class="modal-body px-5 lead">
                                            {{ project.description }}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                                <i class="fa-solid fa-angles-left"></i> Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <nav aria-label="Page navigation" class="mt-4">
                <ul class="pagination">
                    <li class="page-item" :class="{ 'disabled': !link.url, 'active': link.active }"
                        v-for="link in state.projects.links">
                        <button class="page-link" :href="link.url" @click="state.changePage(link.url)">
                            <span v-html="link.label"></span>
                        </button>
                    </li>
                </ul>
            </nav>

        </div>



    </section>
</template>

<style class="scoped">
img {
    max-width: 800px;
    aspect-ratio: 16/9;
}
</style>