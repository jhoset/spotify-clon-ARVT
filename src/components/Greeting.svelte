<script lang="ts">
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = "";
    if (currentHour < 12) {
        greeting = "Good Morning :D";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon :D";
    } else {
        greeting = "Good Evening :D";
    }
</script>

<h1 class="text-3xl font-bold pt-10">{greeting}</h1>
