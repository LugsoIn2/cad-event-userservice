<script lang="ts">
import type { WasGehtEvent } from '@/models/event';
import type { PropType } from 'vue';

export default {
    props: {
        event: {
            required: true,
            type: Object as PropType<WasGehtEvent>
        }
    },
    data() {
        return {
            eventDate: new Date(this.event.eventDate),
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
    },
    watch: {
        event: function (val, oldVal) {
            this.eventDate = new Date(this.event.eventDate);
        }
    },
    components: {},
};
</script>

<template>
    <div class="card border rounded-xl mb-4 h-1/6 drop-shadow-lg">
        <div class="p-4 flex justify-between">
            <div class="flex w-full">
                <div class="flex flex-col items-center">
                    <div class="text-6xl">
                        {{ eventDate.getDate() }}
                    </div>
                    <div>
                        {{ monthNames[eventDate.getMonth()] }}
                    </div>
                </div>
                <div class="flex flex-col justify-between mx-4">
                    <div>
                        <div class="font-bold cardtitle"> {{ event.eventTitle }}</div>
                        <div class="italic"> {{ event.eventTimeString }}</div>
                    </div>
                    <div class=""> {{ (event.eventLocation == event.eventCity) ? '' : event.eventLocation }}</div>
                    <div class=""> {{ event.eventCity }}</div>
                </div>
            </div>

            <div class="h-20 w-20">
                <img :src="event.eventPictureUrl" />
            </div>
        </div>
    </div>
</template>