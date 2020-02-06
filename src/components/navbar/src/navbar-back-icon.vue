<template>
    <span :style="{color: color}"><i class="kom-back-icon"></i><slot></slot></span>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'kom-navbar-back-icon',
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
