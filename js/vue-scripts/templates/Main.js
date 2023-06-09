export default
`
<div>
    <BrCheck v-if="loader" @status="receiveStatus" />

    <template v-if="statusKey == 'not-protected' ">
        This book is already available for download. <br />
        You can download it in the format you want from the download options.
    </template>

    <template v-if="statusKey == 'not-borrowed' ">
        <NotBorrowed />
    </template>

    <template v-if="statusKey == 'success' ">
        <Borrowable />
    </template>

</div>
`