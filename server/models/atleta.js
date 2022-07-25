import mongoose from 'mongoose';

const atletaSchema = mongoose.Schema({
    nome: String,									
    rh: String,
    idAtleta: String,
    tags: [String],
    time: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Atleta = mongoose.model('Atleta', atletaSchema);

export default Atleta;