<template>
    <span :style="{color: color}"><slot></slot><i class="kom-next-icon"></i></span>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'kom-navbar-next-icon',
        props: {
            color: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                },
                default: '#5C5C5C'
            }
        }
    }
</script>
