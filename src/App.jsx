import Counter from './Counter'
import './styles.css'

function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/*       
      <Counter
        iconIncrease='+'
        iconDecrease='-'
        label='My NOT so flexible counter'
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      />
      */}
      <div>
        <Counter>
          <Counter.Label>My super flexible counter</Counter.Label>
          <Counter.Increase icon='+' />
          <Counter.Count />
          <Counter.Decrease icon='-' />
        </Counter>
      </div>
      <div>
        <Counter>
          <Counter.Decrease icon='◄' />
          <Counter.Count />
          <Counter.Increase icon='►' />
        </Counter>
      </div>
    </div>
  )
}

export default App
