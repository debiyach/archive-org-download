export default
`
<div id="progressive">
    <div class="text-center mb-3">
        Please Wait...
    </div>
    <div class="progress" id="shadow">
        <div class="progress-bar progress-bar-danger six-sec-ease-in-out" role="progressbar"
            :style="{width: completedStepPercentage +'%'}"></div>
    </div>
</div>
`