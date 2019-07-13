import bus from "@/utils/bus";
export default {
    methods: {
        close() {
            let visitedViews = this.$store.state.tagsView.visitedViews
            let currentView;
            for (let i = 0; i < visitedViews.length; i++) {
                let view = visitedViews[i]
                if (view.path === this.$route.path)
                    currentView = view
            }
            this.$root.$tags.closeSelectedTag(currentView)
        },
        _beforeclose(tags, view) {
            if (this.$route.name == view.name)
                this.beforeclose(tags, view)

        },
        beforeclose(tags, view) {
           
        }
    },
    mounted() {
        bus.$on("beforetagclose", this._beforeclose);
    },
    destroyed() {
        bus.$off("beforetagclose", this.dirtychange);
    }
}