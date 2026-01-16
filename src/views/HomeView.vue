<template>
  <div class="home">
    <h1>Welcome to Our Application</h1>
    
    <div class="demo-actions">
      <button 
        id="test-button" 
        @click="handleClick" 
        class="action-button"
        data-testid="demo-button"
      >
        {{ buttonText }}
      </button>
      
      <div v-if="clickCount > 0" class="counter" data-testid="click-counter">
        Button clicked {{ clickCount }} times, you know that??
      </div>

      <div>this is secoind push</div>
      
      <input 
        type="text" 
        v-model="inputText" 
        placeholder="Type something..."
        class="demo-input"
        data-testid="demo-input"
      />
      
      <div v-if="inputText" class="input-display" data-testid="input-display">
        You typed: {{ inputText }}
      </div>
    </div>
    
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Vue 3 Composition API</li>
        <li>Vite for fast builds</li>
        <li>Vue Router for navigation</li>
        <li>Pinia for state management</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const clickCount = ref(0)
const inputText = ref('')
const buttonText = ref('Click Me!')

const handleClick = () => {
  clickCount.value++
  buttonText.value = `Clicked ${clickCount.value} times!`
}
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.demo-actions {
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.action-button {
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.action-button:hover {
  background: #3aa876;
}

.counter {
  margin-top: 1rem;
  color: #2c3e50;
  font-weight: bold;
}

.demo-input {
  margin-top: 1rem;
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.input-display {
  margin-top: 1rem;
  padding: 10px;
  background: #e8f5e9;
  border-radius: 4px;
  color: #2c3e50;
}

.features {
  margin-top: 3rem;
  text-align: left;
  max-width: 600px;
  margin: 3rem auto;
}

.features h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  color: #555;
}

.features li:before {
  content: "✓";
  color: #42b983;
  margin-right: 10px;
}
</style>