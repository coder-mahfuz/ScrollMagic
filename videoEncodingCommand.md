##Change video formate
ffmpeg -i yourInputVideo.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p theOutputNameOfTheVideo.mp4

##Findout the frame rate
ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of default=noprint_wrappers=1:nokey=1 yourvideo.mp4
