<script lang="ts">
  /** @Components */
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";

  /** * @TITLE titulo inicial de la app*/
  let nameButton = "Sing With Google";
</script>

<div class="container-svelte">
  <Title nameApp="NET" />
  <Button {nameButton}/>
</div>

<style>
  .container-svelte {
    background: linear-gradient(to bottom, #bbd59f, #343434);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
  }
</style>
