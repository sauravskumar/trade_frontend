pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node'
          args '-p 3000:3000 --name trade_frontend'
        }
        
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'ls'
        sh 'npm run start &'
        input 'Finished using the web site? (Click "Proceed" to continue)'
      }
    }
    stage('Deploy') {
      agent {
        docker {
          image 'node'
          args '-p 3000:300'
        }
        
      }
      steps {
        sh 'ls'
      }
    }
  }
}
