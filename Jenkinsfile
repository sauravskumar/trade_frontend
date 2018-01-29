pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node'
          args '-p 3000:3000'
        }
        
      }
      steps {
        sh 'ls'
      }
    }
  }
}