export default `<div>
    You can download the book using one of the options below!
    <br>
    Succeed: {{ succeed }}
    <br>
    Failed: {{ failed }}
    <br />
    Proceed: {{ proceed }}
    <br />
    <div class="d-flex j-content-evenly a-items-center">
    <div>
    <label>Quality: &nbsp; </label>
        <select class="ia-border bg-transparent cursor-pointer text-center" v-model="quality">
            <option :key="index" :value="reductionFactor.reduce" v-for="(reductionFactor,index) in reductionFactors">
                {{(100 / reductionFactor.reduce).toFixed() }}
                %</option>
        </select>
        </div>
        <button class="ia-border bg-transparent" @click="download">Download</button>
    </div>
</div>`;