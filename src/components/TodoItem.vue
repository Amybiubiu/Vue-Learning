<template>
    <div class="item">
        <div @click="$emit('complete', index)"
        :class="className">{{item.task}}</div>
        <div class="cross"
        @click="$emit('clear')">clear</div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ['item', 'index'],
    computed: {
        className(){
            return this.item.done?'task task-done':'task task-todo'
        }
    }
}
</script>

<style>
.item{
    display: flex;
}
.task{
    margin-right: 50px;
}
.task-done{
    text-decoration: line-through;
}
.task-todo{
    
}
</style>