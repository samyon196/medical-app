<template>
</template>

<script>
export default {
    sockets: {
        messages(payload) {
            console.log('Got message from server!!!: ' + payload.txt);
            console.log('IsSystem: ' + payload.systemMsg)
            this.$store.dispatch('pushMessage', {txt: payload.txt, systemMsg: payload.systemMsg});
            if(this.$route.name != "Chat") {
                this.$store.dispatch('addUnreadMessage');
            }
        }
    }
}
</script>