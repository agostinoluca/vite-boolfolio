<script>
import { state } from '../state';
export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },

}

</script>

<template>
    <header>
        <div class="p-2 mb-4 bg-secondary">
            <div class="container-fluid p-5 text-light">
                <h1 class="display-5 fw-bold">Browse My Web Development Projects!</h1>
                <p class="col-md-8 fs-4 p-2">
                    I'm Luca, a passionate and creative web developer. Explore my projects to see how i transform
                    innovative ideas into extraordinary digital experiences. From responsive websites to interactive web
                    applications, each project showcases my dedication to intuitive design and flawless functionality.

                    Scroll down to see my work and get inspired!
                </p>

                <form @submit.prevent="state.search()">
                    <div class="input-group mb-3">
                        <input type="search" class="form-control" placeholder="search..."
                            v-model="state.search_project">
                        <button class="btn btn-outline-light" type="submit">
                            <i class="fas fa-search fa-lg fa-fw"></i>
                        </button>
                    </div>
                </form>


            </div>
        </div>
    </header>
</template>


<style scoped></style>