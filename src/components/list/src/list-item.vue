<template>
    <router-link :to="href" class="kom-list-item" v-if="type == 'link'">
        <div class="kom-list-img">
            <slot name="img"></slot>
        </div>
        <div class="kom-list-mes">
            <div class="kom-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </router-link>
    <a :href="href || 'javascript:;'" class="kom-list-item" v-else-if="type == 'a'">
        <div class="kom-list-img">
            <slot name="img"></slot>
        </div>
        <div class="kom-list-mes">
            <div class="kom-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </a>
    <div class="kom-list-item" v-else>
        <div class="kom-list-img">
            <slot name="img"></slot>
        </div>
        <div class="kom-list-mes">
            <div class="kom-list-title">
                <slot name="title"></slot>
            </div>
            <slot name="other"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'kom-list-item',
        props: {
            type: {
                type: String,
                validator (value) {
                    return ['link', 'a', 'div'].indexOf(value) > -1;
                },
                default: 'a'
            },
            href: [String, Object]
        }
    }
</script>
