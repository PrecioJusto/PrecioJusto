import { userRepository } from 'src/core/Areas/User/UserRepository';

export default {
  name: 'ProfileImage',
  props: {
    value: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 220,
    },

    height: {
      type: Number,
      default: 220,
    },
  },
  data() {
    return {
      imagePreviewData: this.value,
    };
  },
  async created() {
    const user = await userRepository.getProfile();
    const data = user.data.userImage.usimimage;
    // eslint-disable-next-line no-buffer-constructor
    const buff = new Buffer(data, 'base64');
    this.imagePreviewData = buff.toString('ascii');
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const { files } = input;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreviewData = e.target.result;
          this.$emit('input', this.imagePreviewData);
        };
        reader.readAsDataURL(files[0]);
      }
    },
  },
};
